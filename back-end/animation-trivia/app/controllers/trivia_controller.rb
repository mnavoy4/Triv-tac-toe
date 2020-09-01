class TriviaController < ApplicationController

    def index
        @trivium = Trivium.all 
        render json: @trivium
    end

    def show
        @trivia = Trivium.find(params[:id])
        render json: @trivia
    end

end
