class User < ActiveRecord::Base
  serialize :response, Array, :format => :json
  # accepts_nested_attributes_for :user
  # before_save :serialize_to_hash


  after_create :customerio_identify

  def customerio_identify
    $customerio.identify(id: self.id, created_at: self.created_at.to_i, name: self.firstname, email: self.email, type: "new prospect")
  end

  # def serialize_to_hash
  #   self.response = self.response.to_hash
  # end
end
