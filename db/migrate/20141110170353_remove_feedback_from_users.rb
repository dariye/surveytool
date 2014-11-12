class RemoveFeedbackFromUsers < ActiveRecord::Migration
  def change
    remove_column :users, :feedback, :text
  end
end
