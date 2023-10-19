import { Member, Server, Profile } from "@prisma/client";

export type ServerWithMemberProfile = Server & {
  members: (Member & { profile: Profile })[];
};
