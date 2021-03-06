import { GetLeaderboardsModel } from '../../models/leaderboards';

import { leaderboardsAwayQuery } from '../../utils';

class GetLeaderboardsAwayService {
  private getLeaderboardsModel = new GetLeaderboardsModel(leaderboardsAwayQuery);

  async handle() {
    const leaderboards = await this.getLeaderboardsModel.handle();

    return leaderboards;
  }
}

export default GetLeaderboardsAwayService;
