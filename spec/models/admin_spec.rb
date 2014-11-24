require 'rails_helper'

describe Admin do
  before do
    @admin = FactoryGirl.build(:admin)
  end

  it "gets a uid assigned" do
    @admin.save!
    expect(@admin.uid).not_to be_blank
  end

  it "doesn't send a confirmation email" do
    expect { @admin.save! }.not_to change { ActionMailer::Base.deliveries.count }
  end
end