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
    respond_with @user if @user.save
    # respond_with User.create(user_params)
    ProductOwnerMailer.prospect_email(@user).deliver
  end

  def destroy
    respond_with User.destroy(params[:id])
  end

  private
    def user_params
      params.require(:user).permit(:firstname, :lastname, :email, :feedback)
    end
end
