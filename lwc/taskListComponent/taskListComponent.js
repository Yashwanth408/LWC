import { LightningElement } from 'lwc';

export default class TaskListComponent extends LightningElement {
    taskDetailsList = [
        {taskName: "Task 001", taskDescription: "Prepare PPT for the next Administration Meeting"},
        {taskName: "Task 002", taskDescription: "Knowledge Sharing sessions to Freshers"},
        {taskName: "Task 003", taskDescription: "Clear the Recyclebin"},
        {taskName: "Task 004", taskDescription: "Schedule the meeting with Amazon Support team"},
        {taskName: "Task 005", taskDescription: "Work on the Sev1 Case"}
    ]
}