class MeMailer < ApplicationMailer
  def send(email)
    byebug
    mg_client = Mailgun::Client.new ENV['api_key']
    message_params = {:from    => ENV['gmail_username'],
                      :to      => ENV['gmail_username'],
                      :subject => email.subject,
                      :text    => "From: #{email.name} <#{email.email}>\n\n#{email.text}"}
    mg_client.send_message ENV['domain'], message_params
  end
end
