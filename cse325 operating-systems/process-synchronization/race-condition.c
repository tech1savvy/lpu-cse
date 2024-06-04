#include<stdio.h>
#include<unistd.h>
#include<pthread.h>

void *fun1();
void *fun2();
int shared = 1;

int main(){
	pthread_t thread1, thread2;
	pthread_create(&thread1, NULL, fun1, NULL);
	pthread_create(&thread2, NULL, fun2, NULL);
	pthread_join(thread1, NULL);
	pthread_join(thread2, NULL);
	printf("Final value of shared is %d\n", shared);
}

void *fun1(){
	int x = shared;
	printf("thread1 reads the value of shared as %d\n", x);
	x++;
	printf("local updation by thread1: %d\n", x);
	sleep(1);
	shared = x;
	printf("Value of shared variable updated by thread1: %d\n", shared);
}

void *fun2(){
	int y = shared;
	printf("thread2 reads the value of shared as %d\n", y);
	y--;
	printf("local updation by thread2: %d\n", y);
	sleep(1);
	shared = y;
	printf("Value of shared variable updated by thread2: %d\n", shared);
}