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
                  "/edit$",
                  "/sign_in",
                  "/sign_up"
                ],
                "properties": {
                  "context": "modal"
                }
              }
            ]
          }
      end
    end
  end
end
