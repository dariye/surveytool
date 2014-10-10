class UsersController < ApplicationController
  respond_to :json

  def index
    respond_with User.all
  end

  def create
    respond_with User.create(user_params)
  end

  def destroy
    respond_with User.destroy(params[:id])
  end

  private
    def user_params
      params.require(:user).permit(:firstname, :lastname, :email)
    end
end
