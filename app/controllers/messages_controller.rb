class MessagesController < ApplicationController
  before_action :authenticate_user!
  def create
    room = Room.find(params[:room_id])
    message = room.messages.build(message_params)
    message.user_id = current_user.id
    if message.save
      MessageChannel.broadcast_to(room, render_message(message))
      redirect_back(fallback_location: root_path)
    else
      redirect_back(fallback_location: root_path)
    end
  end

  private

  def message_params
    params.require(:message).permit(:content)
  end

  def render_message(message)
    {
      user: message.user.email,
      content: message.content
    }
  end
end
