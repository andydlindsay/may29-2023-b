class PlayersController < ApplicationController
  def index
    team_id = params[:team_id]
    @team = Team.find(team_id)
    @players = @team.players

    render json: {
      team: @team,
      players: @players
    }
  end
end
