require 'rails_helper'

describe User do

  before do
    @user = FactoryGirl.create(:user)
  end

  it "should be present" do
    expect(@user.id).to be_present
  end

end