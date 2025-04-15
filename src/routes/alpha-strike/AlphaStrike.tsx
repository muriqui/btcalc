import { Outlet } from "react-router";
import TopBar from "../../components/molecules/TopBar";
import GameContainer from "~/components/molecules/GameContainer";
import { System } from "~/types";

/**
 * The wrapper for Alpha Strike gameplay routes.
 */
export default function AlphaStrike() {
  return (
    <>
      <TopBar system={System.AlphaStrike} />
      <GameContainer>
        <Outlet />
      </GameContainer>
    </>
  );
}
