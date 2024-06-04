#include<stdio.h>
#include<unistd.h>
#include<pthread.h>

void *thread_function(void *arg);
int num[2] = {3,5};
int main(){
	pthread_t a_thread;
	void *result;
	pthread_create(&a_thread, NULL, thread_function, (void *)num);
	pthread_join(a_thread, &result);
	printf("inside main program\n");
	printf("thread returned: %s\n", (char *)result);
}

void *thread_function(void *arg){
	printf("inside thread\n");
	int *x = arg;
	int sum = x[0] + x[1];
	printf("sum = %d\n", sum);
	pthread_exit("sum calculated");
}