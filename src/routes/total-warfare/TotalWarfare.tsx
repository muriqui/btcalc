import { Outlet } from "react-router";
import TopBar from "../../components/molecules/TopBar";
import GameContainer from "~/components/molecules/GameContainer";
import { System } from "~/types";

/**
 * The wrapper for Total Warfare gameplay routes.
 */
export default function TotalWarfare() {
  return (
    <>
      <TopBar system={System.TotalWarfare} />
      <GameContainer>
        <Outlet />
      </GameContainer>
    </>
  );
}
