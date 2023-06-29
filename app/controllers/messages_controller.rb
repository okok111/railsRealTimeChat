class MessagesController < ApplicationController
  before_action :authenticate_user!
  def create
    @room = Room.find(params[:room_id])
    @message = @room.messages.create(message_params)
    broadcast_message
  end

  private

  def message_params
    params.require(:message).permit(:content).merge(user: current_user)
  end

  def broadcast_message
    broadcast_action_to @room, :prepend, target: 'messages', partial: 'messages/message', locals: { message: @message }
  end
end
