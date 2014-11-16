class DemoController < ApplicationController
  # http://start.jcolemorrison.com/angularjs-rails-4-1-and-ui-router-tutorial/

  def index
    render layout: layout_name
  end

  private

  def layout_name
    if params[:layout] == 0
        false
    else
        'application'
    end
  end

end
