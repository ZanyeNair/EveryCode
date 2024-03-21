import numpy as np
import matplotlib.pyplot as plt
from scipy import stats as stats

speed = [99,86,87,88,111,86,103,87,94,78,77,85,86]

# x = np.std(speed)
# y = np.var(speed) #this is the variance
# z = np.percentile(speed, 75) #this is the 75th percentile finds how many are below 75th percentile
# a = np.random.normal(5.0, 1.0, 10000) # creates 250 random numbers between 0 and 5

# plt.hist(a, 5)

x = [5,7,8,7,2,17,2,9,4,11,12,9,6]
y = [99,86,87,88,111,86,103,87,94,78,77,85,86]

slope, intercept, r, p, std_err = stats.linregress(x, y)
#e
def myfunc(x):
  return slope * x + intercept

model = list(map(myfunc, x))

plt.scatter(x, y)
plt.plot(x, model)
plt.show()