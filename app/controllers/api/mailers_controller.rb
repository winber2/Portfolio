class Api::MailersController < ApplicationController
  def create
    @email = Email.new(mail_params)
    MeMailer.send_mail(@email).deliver
  end

  private

  def mail_params
    params.require(:mail).permit(:name, :email, :subject, :text)
  end
end
