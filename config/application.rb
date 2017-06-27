require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Portfolio
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
    config.action_mailer.delivery_method = :smtp
    # SMTP settings for mailgun
    ActionMailer::Base.smtp_settings = {
      :port           => 587,
      :address        => "smtp.mailgun.org",
      :domain         => ENV['domain'],
      :user_name      => ENV['username'],
      :password       => ENV['password'],
      :authentication => :plain,
    }
  end
end
