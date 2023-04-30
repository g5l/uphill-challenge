import UserApi from "./UserApi";
import repositoryApi from "./RepositoryApi";

export default {
  user: new UserApi(),
  repository: new repositoryApi()
}