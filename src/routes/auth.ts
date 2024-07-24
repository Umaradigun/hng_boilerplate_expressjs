import { signUp, verifyOtp, login, changeUserRole } from "../controllers";
import { Router } from "express";
import { authMiddleware, checkPermissions } from "../middleware";
import { UserRole } from "../enums/userRoles";

const authRoute = Router();

authRoute.post("/signup", signUp);
authRoute.post("/verify-otp", verifyOtp);
authRoute.post("/login", login);
authRoute.post("/login", login);
authRoute.put(
    "/api/v1/organizations/:organization_id/users/:user_id/role",
    authMiddleware,
    checkPermissions([UserRole.SUPER_ADMIN, UserRole.ADMIN]),
    changeUserRole
  );
export { authRoute };



//swagger Api documentation for AuthRoutes

/**
 * @swagger
 * /signup:
 *   post:
 *     summary: Sign up a new user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 example: yourpassword
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Invalid input
 */

            //Verify OTP 


/**
 * @swagger
 * /verify-otp:
 *   post:
 *     summary: Verify OTP for user authentication
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               otp:
 *                 type: string
 *                 example: 123456
 *               userId:
 *                 type: string
 *                 example: abc123
 *     responses:
 *       200:
 *         description: OTP verified successfully
 *       400:
 *         description: Invalid OTP or user ID
 */




/**
 * @swagger
 * /login:
 *   post:
 *     summary: Log in a user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 example: yourpassword
 *     responses:
 *       200:
 *         description: Login successful
 *       401:
 *         description: Unauthorized
 */




/**
 * @swagger
 * /api/v1/organizations/{organization_id}/users/{user_id}/role:
 *   put:
 *     summary: Change the role of a user in an organization
 *     tags: [Organization]
 *     parameters:
 *       - in: path
 *         name: organization_id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the organization
 *       - in: path
 *         name: user_id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               role:
 *                 type: string
 *                 example: admin
 *     responses:
 *       200:
 *         description: User role updated successfully
 *       403:
 *         description: Forbidden
 *       404:
 *         description: User or organization not found
 */