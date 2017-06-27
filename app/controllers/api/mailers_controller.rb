class Api::MailersController < ApplicationController
  def create
    MeMailer.send(mail_params)
  end

  private

  def mail_params
    params.require(:mail).permit(:name, :email, :subject, :text)
  end
end
