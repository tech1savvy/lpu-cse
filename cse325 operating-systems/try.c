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
	printf("final value %d\n", shared);
}

void *fun1(){
	int x = shared;
	printf("thread1 vaule: %d\n", x);
	x++;
	sleep(1);
	shared = x;
	printf("thread1 updated value: %d\n", shared);
}

void *fun2(){
	int y = shared;
	printf("thread2 value %d\n", y);
	y--;
	sleep(1);
	shared = y;
	printf("thread2 updated value: %d\n", shared);
}