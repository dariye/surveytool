class ProductOwnerMailer < ActionMailer::Base
  default from: "paul.dariye@gmail.com"
  PO_EMAIL = "paul.dariye@gmail.com"

  def prospect_email(user)
    @user = user
    mail(to: PO_EMAIL, subject: 'New Prospect')
  end

end
