import { LightningElement, api } from 'lwc';

export default class TaskComponent extends LightningElement {
    @api taskDetails; // {taskName: Task 001, taskDescription: abcd Testing}
}