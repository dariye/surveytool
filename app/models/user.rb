class User < ActiveRecord::Base
  serialize :response


  after_create :customerio_identify

  def customerio_identify
    $customerio.identify(id: self.id, created_at: self.created_at.to_i, name: (self.firstname + self.lastname), email: self.email, type: "new prospect")
  end
end
