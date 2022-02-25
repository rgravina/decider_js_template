import FakeRoundRepo from './FakeRoundRepo'
import {roundRepositoryContract} from "./roundRepositoryContract"

describe("fake round repo", () => {
    roundRepositoryContract(() => {
        return new FakeRoundRepo()
    })
})

