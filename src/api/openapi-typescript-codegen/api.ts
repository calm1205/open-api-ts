import { DefaultService } from "~/schema/openapi-typescript-codegen";

export const articleApi = {
  getAll: () => DefaultService.getV1Articles(),
};
