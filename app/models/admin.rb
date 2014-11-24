class Admin < ActiveRecord::Base
  include DeviseTokenAuth::Concerns::User
  before_save -> do
    self.uid = SecureRandom.uuid
    self.provider = "email_authentication"
    skip_confirmation!
  end
end
