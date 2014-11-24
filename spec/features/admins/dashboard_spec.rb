require 'rails_helper'

feature 'Dashboard', js:true do

  before do
    @admin = FactoryGirl.create(:confirmed_admin)
    @user = FactoryGirl.create(:user)
    @login_page = LoginPage.new
  end

  scenario "without signin in" do
    visit '/admin/dashboard'

    expect(page).to_not have_content("Survey Responses")
  end

  scenario  "with sign in" do
    visit '/sign_in'
    @login_page.log_in(@admin.email, @admin.password)
    expect(page).to have_content("#{@user.firstname + " " + @user.lastname}")
  end


end