# Be sure to restart your server when you modify this file.

# ActiveSupport::Reloader.to_prepare do
#   ApplicationController.renderer.defaults.merge!(
#     http_host: 'example.org',
#     https: false
#   )
# end



# You may want to disable logging during this process to avoid dumping huge SQL
# strings in to your logs
ActiveRecord::Base.logger = Logger.new('/dev/null')