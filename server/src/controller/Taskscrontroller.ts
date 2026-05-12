import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTasks = async (req: Request, res: Response) => {
  const { projectId } = req.query;
  try {
    const task = await prisma.task.findMany({
      where: { projectId: Number(projectId) },
      include: {
        author: true,
        assignee: true,
        comments: true,
        attachments: true,
      },
    });
    res.status(200).json(task);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error retireving tasks ${error.message}` });
  }
};
export const createTasks = async (req: Request, res: Response) => {
  const {
    title,
    description,
    status,
    priority,
    tags,
    startDate,
    dueDate,
    points,
    projectId,
    authorUserId,
    assignedUserId,
  } = req.body;
  try {
    const newTasks = await prisma.task.create({
      data: {
        title,
        description,
        status,
        priority,
        tags,
        startDate,
        dueDate,
        points,
        projectId,
        authorUserId,
        assignedUserId,
      },
    });
    res.status(200).json(newTasks);
  } catch (error: any) {
    res.status(500).json({ message: `Error create Tasks ${error.message}` });
  }
};

export const updateTasksStatus = async (req: Request, res: Response) => {
  const { taskId } = req.params;
  const { status } = req.body;
  try {
    const task = await prisma.task.update({
      where: { id: Number(taskId) },
      data: {
        status: status,
      },
    });
    res.status(200).json({ task });
  } catch (error: any) {
    res.status(500).json({ message: `Error updating tasks ${error.message}` });
  }
};
