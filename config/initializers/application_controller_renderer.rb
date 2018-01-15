# Be sure to restart your server when you modify this file.

# ActiveSupport::Reloader.to_prepare do
#   ApplicationController.renderer.defaults.merge!(
#     http_host: 'example.org',
#     https: false
#   )
# end


UsdaNutrientDatabase.configure do |config|
  config.batch_size = 20000 # import batch size, if using activerecord-import
  config.perform_logging = true # default false
  config.logger = Rails.logger # default Logger.new(STDOUT)
  config.usda_version = 'sr25' # default sr28
end

require 'activerecord-import/base'
ActiveRecord::Import.require_adapter('postgresql')

# You may want to disable logging during this process to avoid dumping huge SQL
# strings in to your logs
ActiveRecord::Base.logger = Logger.new('/dev/null')