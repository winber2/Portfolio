class Email < ApplicationRecord
  validates :name, :email, :subject, :text, presence: true
end
