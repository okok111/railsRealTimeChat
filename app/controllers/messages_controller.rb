class MessagesController < ApplicationController
  before_action :authenticate_user!
  def create
    @room = Room.find(params[:room_id])
    @message = @room.messages.build(message_params)

    respond_to do |format|
      if @message.save
        format.turbo_stream { render turbo_stream: turbo_stream.prepend("messages", partial: "messages/message", locals: { message: @message }) }
      else
        format.html { redirect_to @room, alert: "Message creation failed" }
      end
    end
  end

  private

  def message_params
    params.require(:message).permit(:content).merge(user: current_user)
  end

end
