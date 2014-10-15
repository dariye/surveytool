Rails.configuration.customerio = {
  :site_id      => ENV['cio_site_id'],
  :api_key      => ENV['cio_api_key']
}

$customerio = Customerio::Client.new(Rails.configuration.customerio[:site_id], Rails.configuration.customerio[:api_key])