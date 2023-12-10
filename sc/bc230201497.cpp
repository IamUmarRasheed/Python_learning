#include <iostream>
#include <ctime>
#include <cstdlib>

using namespace std;

class Node {
public:
    int data;
    Node* next;

    Node(int value) {
        data = value;
        next = NULL;
    }

    void set(int value) {
        data = value;
    }

    int get() {
        return data;
    }

    void setNext(Node* nextNode) {
        next = nextNode;
    }

    Node* getNext() {
        return next;
    }
};

class List {
private:
    Node* head;
    Node* currentNode;
    Node* lastCurrentNode;

public:
    List() {
        head = NULL;
        currentNode = NULL;
        lastCurrentNode = NULL;
    }

    Node* get() {
        return currentNode;
    }

    void add(int value) {
        Node* newNode = new Node(value);

        if (head == NULL) {
            head = newNode;
            currentNode = head;
            lastCurrentNode = head;
        } else {
            lastCurrentNode->setNext(newNode);
            lastCurrentNode = newNode;
        }
    }

    Node* next() {
        if (currentNode != NULL) {
            currentNode = currentNode->getNext();
        }
        return currentNode;
    }

    void displayList() {
        Node* temp = head;
        int elementNumber = 1;
        while (temp != NULL) {
            cout << "List Element " << temp->get() << endl;
            temp = temp->getNext();
            elementNumber++;
        }
    }

    void findMiddleNode() {
        Node* slow = head;
        Node* fast = head;

        if (head == NULL) {
            cout << "The list is empty." << endl;
            return;
        }

        while (fast != NULL && fast->getNext() != NULL) {
            slow = slow->getNext();
            fast = fast->getNext()->getNext();
        }

        cout << "The middle element is: " << slow->get() << "." << endl;
    }
};

int main() {

    srand(time(nullptr));
    int size = rand() % 7 + 3;
    cout << "Randomly generated size of the linked list is: " << size << endl;

    
    List myList;

    for (int i = 0; i < size; i++) {
        int digit;
        cout << "Enter a numeric character: ";
        cin >> digit;
        myList.add(digit);
    }

    
    myList.findMiddleNode();

    return 0;
}
