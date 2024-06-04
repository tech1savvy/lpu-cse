#include<stdio.h>
#include<unistd.h>
#include<pthread.h>

void *thread_function(void *arg);
int i,j,n;
int main(){
	pthread_t a_thread; // thread declaration
	pthread_create(&a_thread, NULL, thread_function, NULL);
	pthread_join(a_thread, NULL);
	printf("Inside main program\n");
	for(j=20;j<25;j++){
		printf("j=%d\n",j);
		sleep(1);
	}
}
	void *thread_function(void *arg){
		printf("Inside thread\n");
		for(i=0;i<5;i++){
			printf("i=%d\n",i);
			sleep(1);
		}
}