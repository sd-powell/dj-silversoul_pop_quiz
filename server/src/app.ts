import express, {
    Application,
    Request,
    Response,
    NextFunction,
} from "express";

const app: Application = express();

// Global middleware
app.use(express.json());

// Simple health check route
app.get(
    "/api/health",
    (req: Request, res: Response, next: NextFunction): void => {
        res.json({ status: "ok" });
    }
);

export default app;