class ProductOwnerMailer < ActionMailer::Base
  default from: ENV['email']
  PO_EMAIL = ENV['po_email']

  def prospect_email(user)
    @user = user
    mail(to: PO_EMAIL, subject: 'New Prospect')
  end

end
