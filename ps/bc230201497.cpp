#include <iostream>
#include <string>
#include <limits> 
using namespace std;

class Node {
public:
    string taskName;
    int taskID;
    string description;
    string dueDate;
    Node* next;

    Node(string name, int id, string desc, string date) {
        taskName = name;
        taskID = id;
        description = desc;
        dueDate = date;
        next = nullptr;
    }
};

class TaskStack {
private:
    Node* head;

public:
    TaskStack() {
        head = nullptr;
    }

    void pushTask(string taskName, int taskID, string description, string dueDate) {
        Node* newNode = new Node(taskName, taskID, description, dueDate);
        if (head == nullptr) {
            head = newNode;
        } else {
            newNode->next = head;
            head = newNode;
        }
    }

    void popTask() {
        if (head == nullptr) {
            cout << "Stack is empty. No task to pop." << endl;
        } else {
            Node* temp = head;
            head = head->next;
            delete temp;
        }
    }

    void topTask() {
        if (head == nullptr) {
            cout << "Stack is empty. No task at the top." << endl;
        } else {
            cout << "Top Task - Name: " << head->taskName << ", Task ID: " << head->taskID << ", Description: " << head->description << ", Due Date: " << head->dueDate << endl;
        }
    }

    void displayTasks() {
        if (head == nullptr) {
            cout << "Stack is empty. No tasks to display." << endl;
        } else {
            cout << "Tasks stack:" << endl;
            Node* temp = head;
            while (temp != nullptr) {
                cout << "Name: " << temp->taskName << ", Task ID: " << temp->taskID << ", Description: " << temp->description << ", Due Date: " << temp->dueDate << endl;
                temp = temp->next;
            }
        }
    }
};

int main() {
    TaskStack taskStack;
    int choice;

    while (true) {
        cout << "Task Management System" << endl;
        cout << "1. Push a Task onto the Stack" << endl;
        cout << "2. Pop a Task from the Stack" << endl;
        cout << "3. Display the Top Task" << endl;
        cout << "4. Display the Entire Stack" << endl;
        cout << "5. Exit" << endl;
        cout << "Enter your choice: ";
        cin >> choice;

        if (cin.fail()) {
            cin.clear();
            cin.ignore(numeric_limits<streamsize>::max(), '\n');
            cout << "Invalid input. Please enter a valid option." << endl;
            continue;
        }

        switch (choice) {
        case 1: {
            string name, desc, date;
            int id;
            cin.ignore();
            cout << "Enter task Name: ";
            getline(cin, name);
            cout << "Enter task ID: ";
            cin >> id;
            cin.ignore();
            cout << "Enter task Description: ";
            getline(cin, desc);
            cout << "Enter due Date: ";
            getline(cin, date);
            taskStack.pushTask(name, id, desc, date);
            break;
        }
        case 2:
            taskStack.popTask();
            break;
        case 3:
            taskStack.topTask();
            break;
        case 4:
            taskStack.displayTasks();
            break;
        case 5:
            return 0;
        default:
            cout << "Invalid choice. Please select a valid option." << endl;
        }
    }

    return 0;
}
