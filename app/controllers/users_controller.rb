class UsersController < ApplicationController
  respond_to :json

  # def new
  #   @user = User.new
  #   respond_with @user
  # end

  def index
    @users = User.all
    respond_with @users
  end

  def create
    @user = User.new(user_params)
    if @user.save
      respond_with @user
      ProductOwnerMailer.prospect_email(@user).deliver
    end
  end

  def destroy
    respond_with User.destroy(params[:id])
  end

  private
    def user_params
      params.require(:user).permit(:firstname, :lastname, :email, :response)
    end
end
