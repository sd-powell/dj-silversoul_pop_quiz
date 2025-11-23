import express, {
    Application,
    Request,
    Response,
    NextFunction,
} from "express";
import cors from "cors";

const app: Application = express();

// Global middleware
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);
app.use(express.json());

// Simple health check route
app.get(
    "/api/health",
    (req: Request, res: Response, next: NextFunction): void => {
        res.json({ status: "ok" });
    }
);

export default app;