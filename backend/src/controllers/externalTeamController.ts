import { Request, Response } from "express";
import { getTeamById } from "../services/footballApi";

export const getTeam = async (req: Request, res: Response) => {
  try {
    
    // Query Parameters Handling
    const myFavouriteTeamId = 42;
    const teamId = Number(req.query.id) || myFavouriteTeamId;
    const data = await getTeamById(teamId);
    
    if (!data.response || data.response.length === 0) {
      return res.status(404).json({
        message: "Team not found",
      });
    }

    const [teamData] = data.response;

    if (!teamData || !teamData.team || !teamData.venue) {
      return res.status(404).json({
        message: "Invalid team data structure from external API",
      });
    }

    const mappedData = {
      id: teamData.team.id,
      name: teamData.team.name,
      code: teamData.team.code,
      country: teamData.team.country,
      founded: teamData.team.founded,
      logo: teamData.team.logo,
      stadium: {
        name: teamData.venue.name,
        city: teamData.venue.city,
        address: teamData.venue.address,
        capacity: teamData.venue.capacity,
        surface: teamData.venue.surface,
      },
    };
    

    res.json(mappedData);
  } catch (error: any) {
    console.error("ERROR:", error?.response?.data || error.message);

    res.status(500).json({
      message: "Error fetching team",
      error: error?.response?.data || error.message,
    });
  }
};