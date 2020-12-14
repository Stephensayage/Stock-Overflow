class User < ApplicationRecord
has_secure_password
has_many :post, dependent: :destroy 
has_many :comments
has_many :likes 

validates :username, presence: true, uniqueness: true
validates :email, presence: true, uniqueness: true
validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
validates :first_name, presence: true
validates :last_name, presence: true

end
