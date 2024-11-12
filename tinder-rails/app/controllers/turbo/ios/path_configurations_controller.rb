module Turbo
  module Ios
    class PathConfigurationsController < ApplicationController
      # skip_before_action :authenticate_user!

      def show
        render json: {
            "settings": {
              "enable-feature-x": true
            },
            "rules": [
              {
                "patterns": [
                  "/new$",
                  "/edit$"
                ],
                "properties": {
                  "context": "modal"
                }
              },
              {
                "patterns": [
                  "^/users/edit$"
                ],
                "properties": {
                  "context": "default"
                }
              }
            ]
          }
      end
    end
  end
end
