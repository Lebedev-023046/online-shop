import "next-auth";

declare module "next-auth" {
  /**
   * Represents the shape of the user object in the session.
   * Add any additional properties you expect in your session's user object.
   */
  interface User {
    id: string; // Add the `id` property
  }

  /**
   * Extends the session type with the custom user type.
   */
  interface Session {
    user?: User;
  }
}
