class RoomsController < ApplicationController
  before_action :authenticate_user!
  def index
    @rooms = Room.all
    @room = Room.new
  end

  def show
    @room = Room.find(params[:id])
    @messages = @room.messages
    @message = Message.new
  end

  def create
    @room = Room.new(room_params)
    if @room.save
      redirect_to rooms_path, notice: 'Room was successfully created.'
    else
      render :index
    end
  end

  private
  def room_params
    params.require(:room).permit(:name)
  end
end
