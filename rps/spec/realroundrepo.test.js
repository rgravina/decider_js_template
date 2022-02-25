import RoundRepository from "../src/RoundRepository"
import {roundRepositoryContract} from "./roundRepositoryContract"

describe("round repo", () => {
    roundRepositoryContract(() => {
        return new RoundRepository()
    })
})

