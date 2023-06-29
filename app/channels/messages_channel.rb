class MessagesChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_for Room.find(params[:room_id])
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
