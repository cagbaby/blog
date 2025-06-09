import numpy as np
import time
import os

# 艺术配置
GRID_SIZE = 40  # 宇宙尺寸
FRAME_DELAY = 0.1  # 帧率（秒）
GENERATIONS = 100  # 演化代数

def create_universe(size):
    """创建随机初始宇宙 - 生命的混沌起源"""
    return np.random.choice([0, 1], size*size, p=[0.85, 0.15]).reshape(size, size)

def count_neighbors(universe, x, y):
    """计算细胞周围的邻居数量 - 生命的社交网络"""
    neighbors = 0
    for i in range(-1, 2):
        for j in range(-1, 2):
            if i == 0 and j == 0: 
                continue  # 跳过自身
            
            # 环形宇宙边界处理（生命在边缘延续）
            nx, ny = (x + i) % GRID_SIZE, (y + j) % GRID_SIZE
            neighbors += universe[nx, ny]
    return neighbors

def evolve(universe):
    """宇宙演化核心逻辑 - 生命的三行诗"""
    new_universe = universe.copy()
    for x in range(GRID_SIZE):
        for y in range(GRID_SIZE):
            neighbors = count_neighbors(universe, x, y)
            
            # 决定生死的三行艺术规则：
            if universe[x, y] and neighbors < 2:  # 孤独致死
                new_universe[x, y] = 0
            elif universe[x, y] and neighbors > 3:  # 拥挤致死
                new_universe[x, y] = 0
            elif not universe[x, y] and neighbors == 3:  # 新生
                new_universe[x, y] = 1
    return new_universe

def render(universe, gen):
    """宇宙可视化 - 将数据转化为生命图景"""
    os.system('cls' if os.name == 'nt' else 'clear')  # 清屏
    
    # 构建艺术化宇宙界面
    border = "╔" + "═" * GRID_SIZE + "╗"
    print(f"{border}  Generation: {gen}")
    for row in universe:
        # 将0/1转化为视觉符号
        visual_row = ''.join(['▓' if cell else ' ' for cell in row])
        print("║" + visual_row + "║")
    print("╚" + "═" * GRID_SIZE + "╝\n")

# 生命游戏剧场
if __name__ == "__main__":
    universe = create_universe(GRID_SIZE)
    
    print("=== 康威生命游戏 - 零玩家的动态艺术 ===")
    print("规则精髓:")
    print("  孤独致死 (邻居<2) | 拥挤致死 (邻居>3)")
    print("  新生魔法 (邻居==3)")
    
    for gen in range(GENERATIONS):
        render(universe, gen)
        universe = evolve(universe)
        time.sleep(FRAME_DELAY)
    
    print("宇宙演化完成... 生命自有其出路")